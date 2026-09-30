// My merged pull requests on the client design-system repo (verified with gh, Sep 2026).
export type Pr = { n: number; title: string; merged: string; add: number; del: number };

export const prs: Pr[] = [
  { n: 262, title: "Build out the Performance module: summary, price compliance, projects, filter bar", merged: "Aug 7", add: 2132, del: 157 },
  { n: 257, title: "AlertsRail: SectionHeader heading + flat/solid-badge card variant", merged: "Aug 7", add: 80, del: 13 },
  { n: 256, title: "AlertsRail: replace inline heading with SectionHeader molecule", merged: "Aug 7", add: 3, del: 5 },
  { n: 246, title: "Pricing module: price review table, detail panel, and active insights", merged: "Aug 7", add: 1803, del: 31 },
  { n: 245, title: "Add solid variant to Badge for higher-contrast card fills", merged: "Aug 7", add: 67, del: 21 },
  { n: 190, title: "Add SearchBar molecule", merged: "Aug 7", add: 204, del: 0 },
  { n: 168, title: "Add ToggleGroup atom", merged: "Aug 7", add: 70, del: 84 },
  { n: 271, title: "Fix: align showcase search input focus ring gap", merged: "Jul 29", add: 3, del: 7 },
  { n: 206, title: "Markdown module polish: event detail, routing, and charts", merged: "Jul 14", add: 2091, del: 128 },
  { n: 203, title: "Add ChatBubble Molecule", merged: "Jul 8", add: 332, del: 0 },
  { n: 214, title: "Add SectionHeader molecule", merged: "Jul 6", add: 136, del: 0 },
  { n: 202, title: "atom: Label", merged: "Jun 26", add: 102, del: 3 },
  { n: 224, title: "Add MultiSelect molecule", merged: "Jun 25", add: 533, del: 0 },
  { n: 189, title: "Add StatusPill molecule", merged: "Jun 25", add: 154, del: 0 },
  { n: 147, title: "feat(atoms): add Combobox — searchable single + multi-select with Command primitives", merged: "Jun 23", add: 699, del: 44 },
  { n: 146, title: "atom: add RadioGroup", merged: "Jun 10", add: 319, del: 0 },
  { n: 145, title: "atom: add GridRadioSelector primitive", merged: "Jun 10", add: 193, del: 0 },
  { n: 119, title: "Add Breadcrumb atom", merged: "Jun 8", add: 195, del: 0 },
  { n: 115, title: "feat: add AgenticSearchBar molecule", merged: "Jun 5", add: 310, del: 1 },
  { n: 8, title: "Add ActivityItem molecule and UserAvatar atom", merged: "Jun 4", add: 248, del: 17 },
];
