import StrapiSettingForm from '../StrapiSettingForm';
import { MSG_REQ_APPLICATION_URL, MSG_VALID_APPLICATION_URL } from '../../helpers/constants';

const validUrls = [
    "http://quickstart-entando.net/entando-strapi",
    "https://quickstart-entando.net/entando-strapi",
    "http://22.124.121.117:1337",
    "http://localhost:1337"
];

const invalidUrls = [
    "/quickstart-entando.net/entando-strapi",
    "quickstart-entando",
    "22.124.121.117:1337"
];

describe("validate function", () => {
    const strapiSetting = new StrapiSettingForm();

    it("validate function not return error message with valid urls", () => {
        for (const validUrl of validUrls) {
            expect(strapiSetting.validateUrl(validUrl)).toEqual("");
        }
    });

    it("validate function requires a application url when input is empty or undefined", () => {
        const emptyUrl = "";
        const undefinedUrl = undefined;
        const nullUrl = null;
        expect(strapiSetting.validateUrl(emptyUrl)).toEqual(MSG_REQ_APPLICATION_URL);
        expect(strapiSetting.validateUrl(undefinedUrl)).toEqual(MSG_REQ_APPLICATION_URL);
        expect(strapiSetting.validateUrl(nullUrl)).toEqual(MSG_REQ_APPLICATION_URL);
    });

    it("validate function return error message when url in input is not valid", () => {
        for (const invalidUrl of invalidUrls) {
            expect(strapiSetting.validateUrl(invalidUrl)).toEqual(MSG_VALID_APPLICATION_URL);
        }
    });


});