// Components from my merged PRs on cleardemand-design-system (verified with gh), largest first.
// Captured at 2x from the prototype's showcase with synthetic data.
const d = "/schema/design-system", a = "/schema/agentic/built";
export type Built = { pr: number; name: string; src: string; w: number; h: number; ratio: string; span: string; alt: string };

export const built: Built[] = [
  { pr: 203, name: "ChatBubble", src: `${d}/chatbubble.jpg`, w: 1740, h: 1478, ratio: "4/3", span: "md:col-span-6 md:row-span-2", alt: "ChatBubble conversation with message states, a chart reply, and follow-up chips" },
  { pr: 224, name: "MultiSelect", src: `${d}/multiselect.jpg`, w: 1740, h: 1832, ratio: "4/3", span: "md:col-span-6 md:row-span-2", alt: "MultiSelect trigger variants and states" },
  { pr: 115, name: "AgenticSearchBar", src: `${d}/agentic-search.jpg`, w: 1772, h: 648, ratio: "16/7", span: "md:col-span-8", alt: "AgenticSearchBar idle and with its suggestion popover" },
  { pr: 8, name: "UserAvatar", src: `${a}/useravatar.jpg`, w: 362, h: 150, ratio: "16/7", span: "md:col-span-4", alt: "UserAvatar sizes" },
  { pr: 145, name: "GridRadioSelector", src: `${a}/grid-radio-selector.jpg`, w: 1092, h: 928, ratio: "1/1", span: "md:col-span-4", alt: "GridRadioSelector with icons, disabled item, and three columns" },
  { pr: 146, name: "RadioGroup", src: `${a}/radio-group.jpg`, w: 826, h: 900, ratio: "1/1", span: "md:col-span-4", alt: "RadioGroup vertical, horizontal, and fieldset variants" },
  { pr: 202, name: "Label", src: `${a}/label.jpg`, w: 576, h: 768, ratio: "1/1", span: "md:col-span-4", alt: "Label with required, optional, error, and disabled fields" },
  { pr: 147, name: "Combobox", src: `${d}/collage/combobox.jpg`, w: 1740, h: 688, ratio: "16/7", span: "md:col-span-6", alt: "Combobox single and multi select" },
  { pr: 8, name: "ActivityItem", src: `${a}/activityitem.jpg`, w: 1740, h: 650, ratio: "16/7", span: "md:col-span-6", alt: "ActivityItem with and without avatars" },
  { pr: 189, name: "StatusPill", src: `${a}/statuspill.jpg`, w: 974, h: 524, ratio: "16/9", span: "md:col-span-4", alt: "StatusPill text, dot, icon, and custom label variants" },
  { pr: 214, name: "SectionHeader", src: `${a}/sectionheader.jpg`, w: 1740, h: 438, ratio: "16/9", span: "md:col-span-4", alt: "SectionHeader with description and actions" },
  { pr: 168, name: "ToggleGroup", src: `${d}/collage/togglegroup.jpg`, w: 636, h: 504, ratio: "16/9", span: "md:col-span-4", alt: "ToggleGroup variants" },
  { pr: 257, name: "AlertsRail · solid badge cards", src: `${a}/alertsrail.jpg`, w: 1740, h: 296, ratio: "21/6", span: "md:col-span-8", alt: "AlertsRail cards with solid severity badges" },
  { pr: 119, name: "Breadcrumb", src: `${d}/collage/breadcrumb.jpg`, w: 616, h: 280, ratio: "21/9", span: "md:col-span-4", alt: "Breadcrumb" },
];
