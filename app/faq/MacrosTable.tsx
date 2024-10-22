export default function MacroTable() {

  const macroParams = [
    { type: "Beta", median: 1, lower: 0.5, upper: 2.5 },
    { type: "Margin", median: 25, lower: 15, upper: 35 },
    { type: "Default risk", median: 10, lower: 4, upper: 12 },
    { type: "Premium rate", median: 3, lower: 1, upper: 6 },
    { type: "Cost of debt", median: 10, lower: 5, upper: 13 },
  ]

  return (
    <div
      className="flex flex-col justify-center shadow-md dark:shadow-md_theme_dark_scrim rounded-xl dark:bg-md_theme_dark_surface_low bg-md_theme_light_surface_low sm:px-2 pt-6 pb-4">
      <table className="text-left">
        <caption className="pb-2 text-sm caption-top">

          <p><span className="font-bold leading-4">Table 1</span>. Estimate ranges <span className="italic">(in nuce)</span></p>

        </caption>
        <thead>
          <tr>
            <th className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block font-sans md:text-sm text-xs antialiased font-normal leading-none opacity-70">
              </p>
            </th>
            <th className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-none text-onBackground opacity-70">
                Median
              </p>
            </th>
            <th className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-none text-onBackground opacity-70">
                Low
              </p>
            </th>
            <th className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-none text-onBackground opacity-70">
                Upper
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[0].type}
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[0].median}%
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[0].lower}%
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[0].upper}%
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[1].type}
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[1].median}%
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[1].lower}%
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[1].upper}%
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[2].type}
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[2].median}%
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[2].lower}%
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[2].upper}%
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[3].type}
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[3].median}%
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[3].lower}%
              </p>
            </td>
            <td className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[3].upper}%
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[4].type}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[4].median}%
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {macroParams[4].lower}%
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
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


export function PrivacyTable() {


  const PrivacyParams = [
    { category: "A. Identifiers" , examples: "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name" , collected: "YES" },
    { category: "B. Personal information as defined in the California Customer Records statute" , examples: "Name, contact information, education, employment, employment history, and financial information" , collected: "" },
    { category: "C. Protected classification characteristics under state or federal law" , examples: "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data" , collected: "" },
    { category: "D. Commercial information" , examples: "Transaction information, purchase history, financial details, and payment information" , collected: "YES" },
    { category: "E. Biometric information" , examples: "Fingerprints and voiceprints" , collected: "" },
    { category: "F. Internet or other similar network activity" , examples: "Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements" , collected: "" },
    { category: "G. Geolocation data" , examples: "Device location" , collected: "" },
    { category: "H. Audio, electronic, sensory, or similar information" , examples: "Images and audio, video or call recordings created in connection with our business activities" , collected: "" },
    { category: "I. Professional or employment-related information" , examples: "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us" , collected: "" },
    { category: "J. Education Information" , examples: "Student records and directory information" , collected: "" },
    { category: "K. Inferences drawn from collected personal information" , examples: "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics" , collected: "NO" },
    { category: "L. Sensitive personal Information" , examples: "" , collected: "NO" },
  ]

  return (
    <div
      className="flex flex-col w-3/3 justify-center shadow-md dark:shadow-md_theme_dark_scrim rounded-xl dark:bg-md_theme_dark_surface_low bg-md_theme_light_surface_low px-2 pt-6 pb-4">
      <table className="text-left">
        <caption className="pb-2 text-sm caption-top">

          We have collected the following categories of personal information in the past twelve (12) months:



        </caption>
        <thead>
          <tr>
            <th className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-none text-onBackground opacity-70">
                Category
              </p>
            </th>
            <th className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-none text-onBackground opacity-70">
                Examples
              </p>
            </th>
            <th className="p-4 border-b border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-none text-onBackground opacity-70">
                Collected
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[0].category}
              </p>
            </td>
            <td className="p-4  border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[0].examples}
              </p>
            </td>
            <td className="p-4  border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[0].collected}
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4  border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[1].category}
              </p>
            </td>
            <td className="p-4  border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[1].examples}
              </p>
            </td>
            <td className="p-4  border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[1].collected}
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4  border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[2].category}
              </p>
            </td>
            <td className="p-4  border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[2].examples}
              </p>
            </td>
            <td className="p-4  border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[2].collected}
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4  border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[3].category}
              </p>
            </td>
            <td className="p-4  border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[3].examples}
              </p>
            </td>
            <td className="p-4  border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[3].collected}
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[4].category}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[4].examples}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[4].collected}
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[5].category}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[5].examples}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[5].collected}
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[6].category}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[6].examples}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[6].collected}
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[7].category}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[7].examples}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[7].collected}
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[8].category}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[8].examples}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[8].collected}
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[9].category}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[9].examples}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[9].collected}
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[10].category}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[10].examples}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[10].collected}
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[11].category}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[11].examples}
              </p>
            </td>
            <td className="p-4 border-opacity-50 dark:border-md_theme_dark_inverseSurface border-md_theme_light_inverseSurface">
              <p className="block md:text-sm text-xs antialiased font-normal leading-normal text-onBackground">
                {PrivacyParams[11].collected}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}