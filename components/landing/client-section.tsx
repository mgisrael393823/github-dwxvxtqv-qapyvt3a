export default function ClientSection() {
  return (
    <section
      id="clients"
      className="container text-center"
    >
      <div className="py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </h2>
          <div className="mt-6 overflow-x-auto pb-2">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <li>
                <img
                  src={`https://cdn.magicui.design/companies/Google.svg`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <img
                  src={`https://cdn.magicui.design/companies/Microsoft.svg`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <img
                  src={`https://cdn.magicui.design/companies/GitHub.svg`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>

              <li>
                <img
                  src={`https://cdn.magicui.design/companies/Uber.svg`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <img
                  src={`https://cdn.magicui.design/companies/Notion.svg`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
