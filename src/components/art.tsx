export default function Art({ tab }: { tab: string }) {
  return (
    <div className="lg:pr-20 text">
      {tab === "ALGXPLR" && (
        <pre className="text art_container scale-[40%] absolute right-0 top-[-30%] lg:scale-[100%] lg:right-2 lg:bottom-0 lg:top-[75%] xl:top-[70%] xl:right-4">
          {`
                                  ░▒▓█▓▒░
                                  ░▒▓█▓▒░
                                  ░▒▓█▓▒░
                                  ░▒▓█▓▒░
                                  ░▒▓█▓▒░

                                  ░▒▓█▓▒░
                                  -About-`}
        </pre>
      )}

      {tab === "COUNTDOWN" && (
        <pre className="text art_container scale-[40%] absolute right-0 top-[-30%] lg:scale-[100%] lg:right-2 lg:bottom-0 lg:top-[75%] xl:top-[70%] xl:right-4">
          {`
   ░▒█████▒░
   ░▒█████▒░
     |░░░|
      |░|
     |░░░|
   ░▒█████▒░
   ░▒█████▒░
  -CountDown-`}
        </pre>
      )}
      {tab === "TIMELINE" && (
        <pre className="text art_container scale-[40%] absolute right-0 top-[-30%] lg:scale-[100%] lg:right-2 lg:bottom-0 lg:top-[75%] xl:top-[70%] xl:right-4 ">
          {`
   ░▒█████▒░
   ░▒   - ▒░
   ░▒ -   ▒░
   ░▒ --  ▒░
   ░▒ - --▒░
   ░▒  -- ▒░
   ░▒█████▒░
  -TimeLine-`}
        </pre>
      )}
      {tab === "SPONSORS" && (
        <pre className="text art_container">
          {`
  ⠀⠀⠀⠀⠀⠀⣀⣠⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣴⡿⠋⠉⠉⠻⢿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠹⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⣿⡄⠀⠀⠀⠀⠀⠀⢸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠸⣷⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⢀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢻⣇⠀⠀⠀⠀⠀⢸⣿⣿⡿⠿⠿⠟⠛⠛⠻⢿⣿⣶⣄⠀⠀⠀
⠀⠀⠀⠀⠀⢈⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣤⠀⠈⠻⣿⣇⠀⠀
⠀⠀⠀⠀⢀⣾⡏⠀⠀⠀⠀⠀⠀⠀⣴⡿⠋⠉⠀⠀⠀⠀⠀⠀⠀⢹⡿⠀⠀
⠀⠀⣀⣤⣼⣿⠀⠀⠀⠀⠀⠀⠀⢸⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣷⣄⠀
⢠⣾⠟⠋⠉⠋⠀⠀⠀⠀⠀⠀⠀⠈⣿⣦⣀⣀⣀⣤⣤⣶⣶⠿⠋⠁⢹⣿⡇
⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡟⢉⣿⠋⠉⠉⠉⠁⠀⠀⠀⠀⢸⣿⠀
⢸⣿⠀⠀⠀⠀⠀⢀⣀⣀⣤⣴⠿⠋⠀⠘⣷⡀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠏⠀
⢸⣿⡄⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠀⠀⠀⣸⣿⢶⣤⣤⣴⡶⠿⠛⠙⣿⣆⠀
⠈⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⣽⣿⠀
⠀⠘⣿⣆⠀⠀⠀⠀⣠⣤⡀⠀⠀⠀⠀⠈⠻⣧⣀⡀⠀⠀⠀⣀⣠⣴⡿⠇⠀
⠀⠀⠘⢿⣿⣦⣤⣴⡿⠻⠿⣷⣦⣤⣤⣤⣴⣾⣿⡿⠿⠿⠿⠟⠛⠉⠀⠀⠀
⠀⠀⠀⠀⠉⢉⣉⠉⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          -Sponsors-`}
        </pre>
      )}
    </div>
  );
}
