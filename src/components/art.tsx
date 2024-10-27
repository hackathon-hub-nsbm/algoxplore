export default function Art({ tab }: { tab: string }) {
  return (
    <div className="lg:pr-20 text">
      {tab === "ABOUT_US" && (
        <pre className="text art_container">
          {`    ░▒▓█▓▒░
    ░▒▓█▓▒░
    ░▒▓█▓▒░
    ░▒▓█▓▒░
    ░▒▓█▓▒░

    ░▒▓█▓▒░`}
        </pre>
      )}

      {tab === "ALGXPLR" && (
        <pre className="text art_container">
          {`   ░▒█████▒░
   ░▒█████▒░
    |░░░░░|
      |░|
    |░░░░░|
   ░▒█████▒░
   ░▒█████▒░`}
        </pre>
      )}
      {tab === "TIMELINE" && (
        <pre className="text art_container">
          {`   ░▒█████▒░
   ░▒   - ▒░
   ░▒ -   ▒░
   ░▒ --  ▒░
   ░▒ - --▒░
   ░▒  -- ▒░
   ░▒█████▒░`}
        </pre>
      )}
      {tab === "SPONSORS" && (
        <pre className="text art_container">
          {`▄▄███▄▄·
██╔════╝
███████╗
╚════██║
███████║
╚═▀▀▀══╝
        `}
        </pre>
      )}
    </div>
  );
}
