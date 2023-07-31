/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Category({ category: { id, title, image } }) {
  return (
    <a
      href="#/"
      className="flex flex-col group items-center gap-y-2 text-center p-4 hover:bg-purple-50"
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded border border-gray-200"
      />
      <span className="text-sm font-semibold text-gray-700 tracking-tight group-hover:text-brand-color">
        {title}
      </span>
    </a>
  );
}
