'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_Y = CLOUD_HEIGHT;
var GAP_WIDTH = 50;
var GAP = 20;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var MAXBARHEIGHT = 150;
var colors = ['rgba(255, 0, 0, 1)', 'hsl(240, 62%, 25%)', 'hsl(243, 0%, 57%)', 'hsl(243, 14%, 45%)'];
var Color = {
  BLACK: '#000',
  WHITE: '#fff',
};
var Attention = {
  WIN: 'Ура вы победили!',
  RESULT: 'Список результатов:',
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, Color.WHITE);

  ctx.fillStyle = Color.BLACK;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(Attention.WIN, CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText(Attention.RESULT, CLOUD_X + GAP, CLOUD_Y + FONT_GAP + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = Color.BLACK;
    ctx.fillText(players[i], CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, BAR_Y - GAP);
    ctx.fillStyle = colors[i];
    ctx.fillRect(CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, BAR_Y - GAP - FONT_GAP, BAR_WIDTH, -((MAXBARHEIGHT * times[i]) / maxTime));
    ctx.fillStyle = Color.BLACK;
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, BAR_Y - GAP - FONT_GAP - ((MAXBARHEIGHT * times[i]) / maxTime) - GAP);
  }
};

