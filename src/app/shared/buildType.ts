export interface BuildType {
  id: string;
  name: string;
  builds: BuildsProperty;
}

export interface BuildsProperty {
  build: Array<Build>;
}

export interface Build {
  number: number;
  status: string;
}
