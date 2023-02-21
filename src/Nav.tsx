import { useKmenu } from "kmenu";
import { FC } from "react";
import { Command } from "react-feather";

const Nav: FC = () => {
  const [input, setInput, open, setOpen, toggle] = useKmenu();

  return (
    <nav>
      <div>
        <a href="https://kmenu.hxrsh.in" target="_blank" rel="noreferrer">
          kmenu
        </a>
        <p>Quick and easy access to application functionality</p>
      </div>
      <button onClick={toggle}>
        <Command />
      </button>
    </nav>
  );
};

export default Nav;
