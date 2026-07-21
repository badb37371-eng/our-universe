export interface Location {
  id: number;
  name: string;
  subtitle: string;
  x: number;
  y: number;
}

export interface RouteInfo {
  title: string;
  subtitle: string;
  from: Location;
  to: Location;
}