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
var ReservationPlaceService = (function (_super) {
    __extends(ReservationPlaceService, _super);
    function ReservationPlaceService() {
        return _super.call(this, 'ReservationPlaces') || this;
    }
    ReservationPlaceService.prototype.getAvailablePeriods = function (callback, placeId, date) {
        wx.showLoading({
            title: "loading..."
        });
        var url = this.apiBaseUrl + "/api/reservationPlaces/" + placeId + "/periods?dt=" + date;
        wx.request({
            url: url,
            success: function (response) {
                wx.hideLoading();
                var result = response.data;
                callback(result);
            }
        });
    };
    return ReservationPlaceService;
}(BaseService_1.BaseService));
exports.ReservationPlaceService = ReservationPlaceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzZXJ2YXRpb25QbGFjZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXNlcnZhdGlvblBsYWNlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFLNUM7SUFBNkMsMkNBQTZCO0lBRXhFO2VBQ0Usa0JBQU0sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQztJQUVNLHFEQUFtQixHQUExQixVQUEyQixRQUFnRCxFQUFFLE9BQWMsRUFBRSxJQUFZO1FBQ3ZHLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixLQUFLLEVBQUUsWUFBWTtTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFJLEdBQUcsR0FBTSxJQUFJLENBQUMsVUFBVSwrQkFBMEIsT0FBTyxvQkFBZSxJQUFNLENBQUM7UUFDbkYsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxHQUFHO1lBQ1IsT0FBTyxFQUFFLFVBQUMsUUFBUTtnQkFDaEIsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNqQixJQUFJLE1BQU0sR0FBNkIsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDckQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsOEJBQUM7QUFBRCxDQUFDLEFBckJELENBQTZDLHlCQUFXLEdBcUJ2RDtBQXJCWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vQmFzZVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXNlcnZhdGlvblBsYWNlIH0gZnJvbSAnLi4vbW9kZWxzL1Jlc2VydmF0aW9uUGxhY2UnO1xyXG5pbXBvcnQgeyBSZXNlcnZhdGlvblBlcmlvZCB9IGZyb20gJy4uL21vZGVscy9SZXNlcnZhdGlvblBlcmlvZCc7XHJcbmltcG9ydCB7IFJldHJ5SGVscGVyIH0gZnJvbSAnLi4vdXRpbHMvUmV0cnlIZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uUGxhY2VTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2U8UmVzZXJ2YXRpb25QbGFjZT57XHJcblxyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcignUmVzZXJ2YXRpb25QbGFjZXMnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBdmFpbGFibGVQZXJpb2RzKGNhbGxiYWNrOihyZXN1bHQ6QXJyYXk8UmVzZXJ2YXRpb25QZXJpb2Q+KT0+dm9pZCwgcGxhY2VJZDpzdHJpbmcsIGRhdGU6IHN0cmluZykge1xyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogXCJsb2FkaW5nLi4uXCJcclxuICAgIH0pO1xyXG4gICAgbGV0IHVybCA9IGAke3RoaXMuYXBpQmFzZVVybH0vYXBpL3Jlc2VydmF0aW9uUGxhY2VzLyR7cGxhY2VJZH0vcGVyaW9kcz9kdD0ke2RhdGV9YDtcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gPEFycmF5PFJlc2VydmF0aW9uUGVyaW9kPj5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19