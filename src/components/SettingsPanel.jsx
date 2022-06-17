import { Drawer } from "@mui/material"
import { Box } from "@mui/material"
import { CrosshairColorPicker }    from "./CrosshairColorPicker"
import { SelectionBoxColorPicker } from "./SelectionBoxColorPicker"
import { CrosshairWidth }          from "./CrosshairWidth"
import { Button } from "@mui/material"

export function SettingsPanel({nv, open, setOpen, width=300}){
	function closeDrawer(){
		setOpen(false)		
	}

   /*
     Using PaperProps here instead of a separate CSS file set the
     background color of the Drawer.
   */
	return (
		<Drawer
      open={open}
	   variant="persistent"
      anchor="left"
      PaperProps={{
            sx: {
                backgroundColor: "#f3f3f3",
            }
      }}
    >
		<Box sx={{
			width:width,
			role: 'presentation',
			display: 'flex',
			flexDirection:'column',
			justifyContent:'flex-start',
			}}
		>
			<Box
				sx={{
					display:'flex'
				}}>
				<Button onClick={closeDrawer}>
					close
				</Button>
			</Box>

			<Box
				sx={{
					display:'flex'
				}}>
				<CrosshairColorPicker nv={nv}/>
			</Box>

			<Box
				sx={{
					display:'flex'
				}}>
				<CrosshairWidth nv={nv}/>
			</Box>

			<Box
				sx={{
					display:'flex'
				}}>
				<SelectionBoxColorPicker nv={nv}/>
			</Box>
		</Box>
    </Drawer>
	)
}



