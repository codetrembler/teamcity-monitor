export interface BuildType {
  id: string;
  name: string;
  builds: BuildsProperty;
}

interface BuildsProperty {
  build: Array<Build>;
}

export interface Build {
  number: number;
  status: string;
}
