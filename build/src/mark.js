"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var Mark;
(function (Mark) {
    Mark.AREA = 'area';
    Mark.BAR = 'bar';
    Mark.LINE = 'line';
    Mark.POINT = 'point';
    Mark.RECT = 'rect';
    Mark.RULE = 'rule';
    Mark.TEXT = 'text';
    Mark.TICK = 'tick';
    Mark.CIRCLE = 'circle';
    Mark.SQUARE = 'square';
})(Mark = exports.Mark || (exports.Mark = {}));
exports.AREA = Mark.AREA;
exports.BAR = Mark.BAR;
exports.LINE = Mark.LINE;
exports.POINT = Mark.POINT;
exports.TEXT = Mark.TEXT;
exports.TICK = Mark.TICK;
exports.RECT = Mark.RECT;
exports.RULE = Mark.RULE;
exports.CIRCLE = Mark.CIRCLE;
exports.SQUARE = Mark.SQUARE;
// Using mapped type to declare index, ensuring we always have all marks when we add more.
var MARK_INDEX = {
    area: 1,
    bar: 1,
    line: 1,
    point: 1,
    text: 1,
    tick: 1,
    rect: 1,
    rule: 1,
    circle: 1,
    square: 1
};
function isMark(m) {
    return !!MARK_INDEX[m];
}
exports.isMark = isMark;
exports.PRIMITIVE_MARKS = util_1.flagKeys(MARK_INDEX);
function isMarkDef(mark) {
    return mark['type'];
}
exports.isMarkDef = isMarkDef;
var PRIMITIVE_MARK_INDEX = util_1.toSet(exports.PRIMITIVE_MARKS);
function isPrimitiveMark(mark) {
    var markType = isMarkDef(mark) ? mark.type : mark;
    return markType in PRIMITIVE_MARK_INDEX;
}
exports.isPrimitiveMark = isPrimitiveMark;
exports.STROKE_CONFIG = ['stroke', 'strokeWidth',
    'strokeDash', 'strokeDashOffset', 'strokeOpacity'];
exports.FILL_CONFIG = ['fill', 'fillOpacity'];
exports.FILL_STROKE_CONFIG = [].concat(exports.STROKE_CONFIG, exports.FILL_CONFIG);
exports.VL_ONLY_MARK_CONFIG_PROPERTIES = ['filled', 'color'];
exports.VL_ONLY_MARK_SPECIFIC_CONFIG_PROPERTY_INDEX = {
    bar: ['binSpacing', 'continuousBandSize', 'discreteBandSize'],
    text: ['shortTimeLabels'],
    tick: ['bandSize', 'thickness']
};
exports.defaultMarkConfig = {
    color: '#4c78a8',
};
exports.defaultBarConfig = {
    binSpacing: 1,
    continuousBandSize: 2
};
exports.defaultTickConfig = {
    thickness: 1
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQXVDO0FBR3ZDLElBQWlCLElBQUksQ0FXcEI7QUFYRCxXQUFpQixJQUFJO0lBQ04sU0FBSSxHQUFXLE1BQU0sQ0FBQztJQUN0QixRQUFHLEdBQVUsS0FBSyxDQUFDO0lBQ25CLFNBQUksR0FBVyxNQUFNLENBQUM7SUFDdEIsVUFBSyxHQUFZLE9BQU8sQ0FBQztJQUN6QixTQUFJLEdBQVcsTUFBTSxDQUFDO0lBQ3RCLFNBQUksR0FBVyxNQUFNLENBQUM7SUFDdEIsU0FBSSxHQUFXLE1BQU0sQ0FBQztJQUN0QixTQUFJLEdBQVcsTUFBTSxDQUFDO0lBQ3RCLFdBQU0sR0FBYSxRQUFRLENBQUM7SUFDNUIsV0FBTSxHQUFhLFFBQVEsQ0FBQztBQUMzQyxDQUFDLEVBWGdCLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQVdwQjtBQVFZLFFBQUEsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDakIsUUFBQSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNmLFFBQUEsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDakIsUUFBQSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNuQixRQUFBLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ2pCLFFBQUEsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDakIsUUFBQSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNqQixRQUFBLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBRWpCLFFBQUEsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDckIsUUFBQSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUVsQywwRkFBMEY7QUFDMUYsSUFBTSxVQUFVLEdBQXFCO0lBQ25DLElBQUksRUFBRSxDQUFDO0lBQ1AsR0FBRyxFQUFFLENBQUM7SUFDTixJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssRUFBRSxDQUFDO0lBQ1IsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUNQLElBQUksRUFBRSxDQUFDO0lBQ1AsSUFBSSxFQUFFLENBQUM7SUFDUCxNQUFNLEVBQUUsQ0FBQztJQUNULE1BQU0sRUFBRSxDQUFDO0NBQ1YsQ0FBQztBQUVGLGdCQUF1QixDQUFTO0lBQzlCLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFGRCx3QkFFQztBQUVZLFFBQUEsZUFBZSxHQUFHLGVBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQXlFcEQsbUJBQTBCLElBQWE7SUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBRkQsOEJBRUM7QUFFRCxJQUFNLG9CQUFvQixHQUFHLFlBQUssQ0FBQyx1QkFBZSxDQUFDLENBQUM7QUFFcEQseUJBQWdDLElBQXVEO0lBQ3JGLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNwRCxNQUFNLENBQUMsUUFBUSxJQUFJLG9CQUFvQixDQUFDO0FBQzFDLENBQUM7QUFIRCwwQ0FHQztBQUVZLFFBQUEsYUFBYSxHQUFHLENBQUMsUUFBUSxFQUFFLGFBQWE7SUFDbkQsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBRXhDLFFBQUEsV0FBVyxHQUFHLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBRXRDLFFBQUEsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBYSxFQUFFLG1CQUFXLENBQUMsQ0FBQztBQUUzRCxRQUFBLDhCQUE4QixHQUF5QixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUUzRSxRQUFBLDJDQUEyQyxHQUVwRDtJQUNGLEdBQUcsRUFBRSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQztJQUM3RCxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUN6QixJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDO0NBQ2hDLENBQUM7QUF3QlcsUUFBQSxpQkFBaUIsR0FBZTtJQUMzQyxLQUFLLEVBQUUsU0FBUztDQUNqQixDQUFDO0FBZ0VXLFFBQUEsZ0JBQWdCLEdBQWM7SUFDekMsVUFBVSxFQUFFLENBQUM7SUFDYixrQkFBa0IsRUFBRSxDQUFDO0NBQ3RCLENBQUM7QUF3Q1csUUFBQSxpQkFBaUIsR0FBZTtJQUMzQyxTQUFTLEVBQUUsQ0FBQztDQUNiLENBQUMifQ==