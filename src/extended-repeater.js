module.exports = function repeater(str, options) {
    const additionRepeat = options.additionRepeatTimes || 1;
    const addText = options.addition === undefined ? '' : options.addition;
    const additional = Array.from({length: additionRepeat}, x => addText + '')
        .join(options.additionSeparator || '|');
    return Array.from({length: options.repeatTimes || 1}, x => str + '' + additional).join(options.separator || '+');
};
  