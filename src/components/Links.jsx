import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "All" },
  { url: "/images", text: "Images" },
  { url: "/news", text: "News" },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink
          key={index}
          to={url}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-blue-300 border-b-1 border-blue-700 m-2 mb-0"
              : "m-2 mb-0"
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
