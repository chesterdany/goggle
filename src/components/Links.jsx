import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "All" },
  { url: "/images", text: "Images" },
  { url: "/news", text: "News" },
];

// find how to style active navlinks !!!

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink key={index} to={url} className="m-2 mb-0">
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
