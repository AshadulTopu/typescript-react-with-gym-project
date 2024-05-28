export enum SelectedPage {
  home = "Home",
  benefits = "benefits",
  ourClasses = "ourclasses",
  contactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

// export interface ClassType {
//   name: string;
//   description?: string;
//   image: string;
// }
