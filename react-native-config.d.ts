declare module 'react-native-config' {
  interface NativeConfig {
    ENV: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
