import React, { useState } from "react";

interface FormErrors {
  teamName?: string;
  email?: string;
  contact?: string;
  university?: string;
  foodPreference?: string;
  member1?: string;
  member2?: string;
  member3?: string;
  member4?: string;
}

export default function RegistrationForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    const teamName = formData.get("entry.663129380") as string;
    if (!teamName || teamName.length < 2 || teamName.length > 50) {
      newErrors.teamName = "Team name must be between 2 and 50 characters";
    } else if (!/^[a-zA-Z0-9\s]+$/.test(teamName)) {
      newErrors.teamName =
        "Team name can only contain letters, numbers, and spaces";
    }

    const email = formData.get("entry.1438216699") as string;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const contact = formData.get("entry.278976986") as string;
    if (!contact || !/^07[0-9]{8}$/.test(contact.replace(/[-\s]/g, ""))) {
      newErrors.contact = "Please enter a valid mobile number (07X-XXXX-XXX)";
    }

    const university = formData.get("entry.88928883") as string;
    if (!university || university.length < 2 || university.length > 50) {
      newErrors.university =
        "University name must be between 2 and 50 characters";
    }

    const foodPreference = formData.get("entry.1489052153") as string;
    if (!foodPreference) {
      newErrors.foodPreference = "Please select your food preference";
    }

    const member1 = formData.get("entry.808958187") as string;
    const member2 = formData.get("entry.1178906780") as string;
    const member3 = formData.get("entry.26362077") as string;
    const member4 = formData.get("entry.1779595281") as string;

    const nameRegex = /^[a-zA-Z\s]{2,50}$/;

    if (!member1 || !nameRegex.test(member1)) {
      newErrors.member1 = "Please enter a valid name for member 1";
    }
    if (!member2 || !nameRegex.test(member2)) {
      newErrors.member2 = "Please enter a valid name for member 2";
    }
    if (member3 && !nameRegex.test(member3)) {
      newErrors.member3 = "Please enter a valid name for member 3";
    }
    if (member4 && !nameRegex.test(member4)) {
      newErrors.member4 = "Please enter a valid name for member 4";
    }

    return newErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await fetch(event.currentTarget.action, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      if (result.ok || result.status === 0) {
        window.alert("Registration Successful. Thank you for registering.");
        window.location.reload();
      } else {
        window.alert("Sorry, Something went wrong. Please try again later.");
      }
    } catch (error) {
      window.alert("Sorry, Something went wrong. Please try again later.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const ErrorMessage: React.FC<{ error?: string }> = ({ error }) =>
    error ? <span className="text-red-500 text-xs mt-1">{error}</span> : null;

  return (
    <div className="border-cover underscan">
      <p className="text">Register for the AlgoXplore 1.0</p>
      <form
        className="pt-9"
        action="https://docs.google.com/forms/d/e/1FAIpQLScyu_WYhD3NycnjeIXOBh1YROtu8pX9T6Zp0h7ayHS-DJ91VQ/formResponse"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6 xl:flex-row xl:gap-20">
          <div className="flex flex-col">
            <label htmlFor="teamname">Team Name</label>
            <input
              className={`input mt-1 ${errors.teamName ? "border-red-500" : ""}`}
              type="text"
              name="entry.663129380"
              placeholder="Group X"
              required
            />
            <ErrorMessage error={errors.teamName} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className={`input mt-1 ${errors.email ? "border-red-500" : ""}`}
              type="email"
              name="entry.1438216699"
              placeholder="example@email.com"
              required
            />
            <ErrorMessage error={errors.email} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobile">Contact Number</label>
            <input
              className={`input mt-1 ${errors.contact ? "border-red-500" : ""}`}
              type="text"
              name="entry.278976986"
              placeholder="07X-XXXX-XXX"
              required
            />
            <ErrorMessage error={errors.contact} />
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-6 lg:flex-row lg:gap-20 lg:pt-9">
          <div className="flex flex-col">
            <label htmlFor="university">University</label>
            <input
              className={`input mt-1 ${errors.university ? "border-red-500" : ""}`}
              type="text"
              name="entry.88928883"
              placeholder="NSBM"
              required
            />
            <ErrorMessage error={errors.university} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="foodPreference">
              Food Preference <span className="text-xs">(Veg or Non-veg)</span>
            </label>
            <select
              className={`input3 mt-1 ${errors.foodPreference ? "border-red-500" : ""}`}
              name="entry.1489052153"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select your option
              </option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
            <ErrorMessage error={errors.foodPreference} />
          </div>
        </div>
        <div className="flex flex-col pt-6 lg:pt-9">
          <label htmlFor="member">
            Team Members Names{" "}
            <span className="text-xs">(To be printed on certificates)</span>
          </label>
          <input
            className={`input2 mt-1 ${errors.member1 ? "border-red-500" : ""}`}
            type="text"
            name="entry.808958187"
            placeholder="Member 1"
            required
          />
          <ErrorMessage error={errors.member1} />
          <input
            className={`input2 mt-1 ${errors.member2 ? "border-red-500" : ""}`}
            type="text"
            name="entry.1178906780"
            placeholder="Member 2"
            required
          />
          <ErrorMessage error={errors.member2} />
          <input
            className={`input2 mt-1 ${errors.member3 ? "border-red-500" : ""}`}
            type="text"
            name="entry.26362077"
            placeholder="Member 3"
          />
          <ErrorMessage error={errors.member3} />
          <input
            className={`input2 mt-1 ${errors.member4 ? "border-red-500" : ""}`}
            type="text"
            name="entry.1779595281"
            placeholder="Member 4"
          />
          <ErrorMessage error={errors.member4} />
        </div>
        <button
          className="btn text mt-9 border p-2 text-sm border-[#38ac38] hover:bg-[#38ac38] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Registering..." : ">> Register"}
        </button>
      </form>
      <p className="text-xs pt-9">
        <sup>*</sup>Minimum 2 members are required to participate in the event.
      </p>
    </div>
  );
}
