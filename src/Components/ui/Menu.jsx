/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Menu({ title, items }) {
  return (
    <section>
      <nav className="grid gap-y-2 md:gap-y-4">
        <h6 className="text-lg text-primary-brand-color flex items-center justify-between">
          {title}
        </h6>
        <nav>
          <ul className="grid gap-y-1 md:gap-y-2">
            {items.map((item, key) => (
              <li key={key}>
                <a href="#/" className="text-sm hover:text-brand-color">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </section>
  );
}
