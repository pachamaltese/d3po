family     = require "../../core/methods/font/family.js"
align      = require "../../core/methods/font/align.js"
decoration = require "../../core/methods/font/decoration.js"
margin     = require "../../core/methods/process/margin.js"
transform  = require "../../core/methods/font/transform.js"

module.exports =
  align: align("center")
  border:   1
  color:
    primary:
      process: (value, vars) ->
        primary   = @value
        unless vars.ui.color.secondary.value
          vars.ui.color.secondary.value = d3.rgb(primary).darker(0.75).toString()
        value
      value: "#ffffff"
    secondary:
      value: false
  display:
    acceped: ["block", "inline-block"]
    value:   "inline-block"
  font:
    align:      align("center")
    color:      "#444"
    decoration: decoration()
    family:     family()
    size:       11
    transform:  transform()
    weight:     200
  margin:
    process: (value) ->

      value     = @value if value is undefined
      userValue = value
      margin value, this
      userValue

    value: 5
  padding:
    process: (value) ->

      value     = @value if value is undefined
      userValue = value
      margin value, this
      userValue

    value: 5
