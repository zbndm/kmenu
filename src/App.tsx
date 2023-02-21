import "./styles.css";
import "kmenu/dist/index.css";
import { MenuConfig, MenuProvider } from "kmenu";
import Nav from "./Nav";
import Menu from "./Menu";

export default function App() {
  const config: MenuConfig = {
    backdropBlur: 5,
    backdropColor: "#e7e7e7e5"
  };

  return (
    <body>
      <MenuProvider dimensions={{ sectionHeight: 34 }} config={config}>
        <Nav />
        <Menu />
        <div>
          <main>
            <video muted autoPlay loop>
              <source src="https://kmenu.hxrsh.in/Demo.mp4" />
            </video>
            <h2>Overview</h2>
            <p>
              Command menus are a feature that help users navigate your
              website's functionality with ease. Rather than navigating through
              several menus and being frustrated when they can't find features,
              here they can just press cmd/ctrl+k and type away!
            </p>
            <p>
              Do you also want to add this to your site? Check out the{" "}
              <a href="https://github.com/harshhhdev/kmenu">documentation</a>.
            </p>
          </main>
        </div>
      </MenuProvider>
    </body>
  );
}
