export default function Art({ tab }: { tab: string }) {
  return (
    <div className="lg:pr-20 mt-40 hidden lg:block text">
      {tab === "ALGXPLR" && (
        <pre className="text art_container">
          {`
                                  ░▒▓█▓▒░
                                  ░▒▓█▓▒░
                                  ░▒▓█▓▒░
                                  ░▒▓█▓▒░
                                  ░▒▓█▓▒░

                                  ░▒▓█▓▒░
                                 ---------
                                   ABOUT`}
        </pre>
      )}

      {tab === "COUNTDOWN" && (
        <pre className="text art_container">
          {`
   ░▒█████▒░
   ░▒█████▒░
    |░░░░░|
      |░|
    |░░░░░|
   ░▒█████▒░
   ░▒█████▒░
   ---------
   COUNTDOWN`}
        </pre>
      )}
      {tab === "TIMELINE" && (
        <pre className="text art_container">
          {`
   ░▒█████▒░
   ░▒   - ▒░
   ░▒ -   ▒░
   ░▒ --  ▒░
   ░▒ - --▒░
   ░▒  -- ▒░
   ░▒█████▒░
   ---------
   TIME-LINE`}
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
          ----------
           SPONSORS`}
        </pre>
      )}
    </div>
  );
}
