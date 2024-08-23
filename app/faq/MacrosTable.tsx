export default function MacroTable() {

    const macroParams = [
        {type: "Beta", median: 1, lower: 0.5, upper: 2.5},
        {type: "Margin", median: 25, lower: 15, upper: 35},
        {type: "Default risk", median: 10, lower: 4, upper: 12},
        {type: "Premium rate", median: 3, lower: 1, upper: 6},
        {type: "Cost of debt", median: 10, lower: 5, upper: 13},
    ]

    return (
        <div
  className="flex flex-col w-3/3 justify-center shadow-md shadow-md_theme_dark_scrim rounded-xl bg-md_theme_dark_surface_low px-2 pt-6 pb-4">
  <table className="text-left">
    <caption className="pb-2 text-sm caption-top">

      <span className="font-bold leading-4">Table 1</span>. Macroeconomic and company specific parameters included in the Fritilaria predifined models (not the extended list)

    </caption>
    <thead>
      <tr>
        <th className="p-4 border-b border-opacity-50 border-primary">
          <p className="block font-sans md:text-sm text-xs antialiased font-normal leading-none opacity-70">
          </p>
        </th>
        <th className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-none text-onBackground opacity-70">
            Median
          </p>
        </th>
        <th className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-none text-onBackground opacity-70">
            Low
          </p>
        </th>
        <th className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-none text-onBackground opacity-70">
            Upper
          </p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[0].type}
          </p>
        </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[0].median}%
          </p>
        </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[0].lower}%
          </p>
        </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[0].upper}%
            </p>
        </td>
      </tr>
      <tr>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[1].type}
          </p>
        </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[1].median}%
          </p>
        </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[1].lower}%
          </p>
        </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[1].upper}%
            </p>
        </td>
      </tr>
      <tr>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[2].type}
            </p>
            </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[2].median}%
          </p>
        </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[2].lower}%
          </p>
        </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[2].upper}%
            </p>
        </td>
      </tr>
      <tr>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[3].type}
          </p>
        </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[3].median}%
          </p>
        </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[3].lower}%
          </p>
        </td>
        <td className="p-4 border-b border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[3].upper}%
            </p>
        </td>
      </tr>
      <tr>
        <td className="p-4 border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[4].type}
          </p>
        </td>
        <td className="p-4 border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[4].median}%
          </p>
        </td>
        <td className="p-4 border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[4].lower}%
          </p>
        </td>
        <td className="p-4 border-opacity-50 border-primary">
          <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
            {macroParams[4].upper}%
            </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
)
}