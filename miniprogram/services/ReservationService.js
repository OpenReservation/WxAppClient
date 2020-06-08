"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseService_1 = require("./BaseService");
var ReservationService = (function (_super) {
    __extends(ReservationService, _super);
    function ReservationService() {
        return _super.call(this, 'Reservations') || this;
    }
    ReservationService.prototype.NewReservation = function (callback, reservation, captchaType, captcha) {
        wx.showLoading({
            title: "loading..."
        });
        var url = this.apiBaseUrl + "/api/reservations";
        wx.request({
            url: url,
            method: "POST",
            header: {
                "captchaType": captchaType,
                "captcha": captcha,
                "Content-Type": "application/json"
            },
            data: reservation,
            dataType: "json",
            success: function (response) {
                wx.hideLoading();
                var result = response.data;
                callback(result);
            },
            fail: function (err) {
            }
        });
    };
    return ReservationService;
}(BaseService_1.BaseService));
exports.ReservationService = ReservationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzZXJ2YXRpb25TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVzZXJ2YXRpb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDZDQUE0QztBQUs1QztJQUF3QyxzQ0FBd0I7SUFFOUQ7ZUFDRSxrQkFBTSxjQUFjLENBQUM7SUFDdkIsQ0FBQztJQUVNLDJDQUFjLEdBQXJCLFVBQXNCLFFBQTJCLEVBQUMsV0FBd0IsRUFBRSxXQUFtQixFQUFFLE9BQWU7UUFDOUcsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLEtBQUssRUFBRSxZQUFZO1NBQ3BCLENBQUMsQ0FBQztRQUNILElBQUksR0FBRyxHQUFNLElBQUksQ0FBQyxVQUFVLHNCQUFtQixDQUFDO1FBQ2hELEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFDO2dCQUNMLGFBQWEsRUFBRSxXQUFXO2dCQUMxQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQztZQUNELElBQUksRUFBRSxXQUFXO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE9BQU8sRUFBRSxVQUFDLFFBQVE7Z0JBQ2hCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxNQUFNLEdBQVEsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDaEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO1lBRVYsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUEvQkQsQ0FBd0MseUJBQVcsR0ErQmxEO0FBL0JZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vQmFzZVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXNlcnZhdGlvbiB9IGZyb20gJy4uL21vZGVscy9SZXNlcnZhdGlvbic7XHJcbmltcG9ydCB7IFJldHJ5SGVscGVyIH0gZnJvbSAnLi4vdXRpbHMvUmV0cnlIZWxwZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNlcnZhdGlvblNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZTxSZXNlcnZhdGlvbj57XHJcblxyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcignUmVzZXJ2YXRpb25zJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgTmV3UmVzZXJ2YXRpb24oY2FsbGJhY2s6KHJlc3VsdDphbnkpPT52b2lkLHJlc2VydmF0aW9uOiBSZXNlcnZhdGlvbiwgY2FwdGNoYVR5cGU6IHN0cmluZywgY2FwdGNoYTogc3RyaW5nKXtcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6IFwibG9hZGluZy4uLlwiICBcclxuICAgIH0pO1xyXG4gICAgbGV0IHVybCA9IGAke3RoaXMuYXBpQmFzZVVybH0vYXBpL3Jlc2VydmF0aW9uc2A7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcjp7XHJcbiAgICAgICAgXCJjYXB0Y2hhVHlwZVwiOiBjYXB0Y2hhVHlwZSxcclxuICAgICAgICBcImNhcHRjaGFcIjogY2FwdGNoYSxcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiByZXNlcnZhdGlvbixcclxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSA8YW55PnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGVycik9PntcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==