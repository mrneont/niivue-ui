import { Grid } from "@mui/material"
import { Typography } from "@mui/material"
import { Input } from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"

export function CrosshairWidth({nv}){
	const [crosshairWidth, setCrosshairWidth] = useState(2)
   // this function will run only once, when screen is drawn.  if args
   // are put into [], those would be things to check for changes to
   // run again.
   useEffect(() => {
      updateCrosshairWidth(crosshairWidth)
   }, [])
	
	function updateCrosshairWidth(w){
		setCrosshairWidth(w)
		nv.opts.crosshairWidth = w
      nv.drawScene()
	}

   /*  Comments here, outside return, don't need {...}
       Grid containers can only contain Grid item elements, hence all 
       things are wrapped in Grid item. 
   */
	return (
	<Grid container m={2}>
      {/* mui parameter: m is margin (and comments inside return()
          need curly bracket wrapping */}
		<Grid item marginRight='auto'>
         {/* Typograph text: can take many params */}
			<Typography>                                               
				Crosshair width
			</Typography>
		</Grid>
		<Grid item>
         {/* type: match useState type; do NOT put this comment inside
             * the <Input ...>, because it will be interpreted as
             * empty parameter to pass */}
			<Input 
      	   disableUnderline={true}
				type='number'
				style={{width:'50px', height:'20px'}}
				onInput={(e)=>{updateCrosshairWidth(e.target.value);}}
				value={crosshairWidth}
			/>
		</Grid>
	</Grid>
	)
}
