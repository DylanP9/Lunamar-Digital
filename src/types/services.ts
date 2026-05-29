export interface Service {
  /** Stable id used for keys and anchors. */
  id: string;
  title: string;
  /** One strong sentence used on cards. */
  summary: string;
  /** Longer description used on the services page. */
  detail: string;
  /** Bullet points of what is included. */
  points: string[];
  /** Icon key resolved by the Icon component. */
  icon: string;
}
