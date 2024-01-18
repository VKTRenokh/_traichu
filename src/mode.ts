export interface Mode {
  minimal: boolean;
  dockClosed: boolean;
}

export const modeKey = 'mode';
export const modeToken = Symbol('mode');
