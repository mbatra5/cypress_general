const desktop = [
  { width: 2560, height: 1480, name: "firefox" },
  { width: 1366, height: 768, name: "chrome" },
  { width: 1280, height: 800, name: "ie11" },
  { width: 1366, height: 800, name: "ie11" },
  { width: 1440, height: 1200, name: "edgelegacy" },
  { width: 1440, height: 1200, name: "edgechromium" },
  { width: 1600, height: 1200, name: "safari" },
  { width: 2560, height: 1480, name: "chrome" },
  { width: 1920, height: 1200, name: "safari" },
  {
    iosDeviceInfo: {
      deviceName: "iPad Pro (12.9-inch) (3rd generation)",
      screenOrientation: "portrait",
      iosVersion: "latest",
    },
  },
  {
    iosDeviceInfo: {
      deviceName: "iPad Air (2nd generation)",
      screenOrientation: "landscape",
      iosVersion: "latest-1",
    },
  },
];

const devices = [
  {
    iosDeviceInfo: {
      deviceName: "iPhone 11",
      screenOrientation: "portrait",
      iosVersion: "latest-1",
    },
  },
  {
    iosDeviceInfo: {
      deviceName: "iPad (7th generation)",
      screenOrientation: "portrait",
      iosVersion: "latest",
    },
  },
  {
    iosDeviceInfo: {
      deviceName: "iPhone 11 Pro",
      screenOrientation: "portrait",
      iosVersion: "latest",
    },
  },
  { deviceName: "Pixel 2", screenOrientation: "portrait" },
  { deviceName: "OnePlus 7T Pro", screenOrientation: "portrait" },
];

const all = [
  { width: 2560, height: 1480, name: "firefox" },
  { width: 1366, height: 768, name: "chrome" },
  { width: 1280, height: 800, name: "ie11" },
  { width: 1440, height: 1200, name: "edgelegacy" },
  { width: 1440, height: 1200, name: "edgechromium" },
  { width: 1440, height: 1200, name: "safari" },
  { width: 2560, height: 1480, name: "chrome" },
  { width: 1920, height: 1200, name: "safari" },
  {
    deviceName: "iPad Mini",
    screenOrientation: "landscape",
    iosVersion: "latest",
  },
  {
    deviceName: "iPad Pro (12.9-inch) (3rd generation)",
    screenOrientation: "portrait",
    iosVersion: "latest",
  },
  { deviceName: "Pixel 2", screenOrientation: "portrait" },
  { deviceName: "OnePlus 7T Pro", screenOrientation: "portrait" },
  {
    iosDeviceInfo: {
      deviceName: "iPad (7th generation)",
      screenOrientation: "portrait",
      iosVersion: "latest",
    },
  },
  {
    iosDeviceInfo: {
      deviceName: "iPhone 11 Pro",
      screenOrientation: "portrait",
      iosVersion: "latest",
    },
  },
];

const chrome = { width: 1366, height: 768, name: "chrome" };
const firefox = { width: 2560, height: 1480, name: "firefox" };

const iphone = {
  iosDeviceInfo: {
    deviceName: "iPhone 11 Pro",
    screenOrientation: "portrait",
    iosVersion: "latest",
  },
};

class returnBrowsers {
  getDesktopBrowsers() {
    return desktop;
  }

  getDeviceBrowsers() {
    return devices;
  }

  getAllBrowsers() {
    return all;
  }

  getChrome() {
    return chrome;
  }

  getFirefox() {
    return firefox;
  }

  getIphone() {
    return iphone;
  }
}

export default returnBrowsers;
