import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("getFullYear function", () => {
  test("should return the correct year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe("getFooterCopy function", () => {
  test('should return "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  test('should return "Holberton School main dashboard" when isIndex is false', () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });
});

describe("getLatestNotification function", () => {
  test('should return a string containing "<strong>Urgent requirement</strong> - complete by EOD"', () => {
    const notification = getLatestNotification();
    expect(notification).toContain(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
