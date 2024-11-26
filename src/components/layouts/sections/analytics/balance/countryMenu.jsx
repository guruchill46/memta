import { useState } from "react"
import Box from "@mui/material/Box"
import Menu from "@mui/material/Menu"
import Stack from "@mui/material/Stack"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import {Icon} from "@iconify/react";
// #!/usr/bin/env node
// import { readFiles } from "node-dir";
// import { writeFile, rename } from "fs";

// // ---- import to_js function ---
// import to_js from "./convtojs.jsx"; // change file name to the file name you chose


const countries = [
  {
    id: 1,
    name: "United States",
    flag: "circle-flags:um"
  },
  {
    id: 2,
    name: "England",
    flag: "emojione:flag-england"
  },
  {
    id: 3,
    name: "Sweden",
    flag: "emojione:flag-for-sweden"
  },
  {
    id: 4,
    name: "Turkey",
    flag: "emojione:flag-for-turkey"
  }
]

const CountryMenu = () => {
  const [country, setCountry] = useState(countries[0])
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

//   const conv =()=> {
//     const __dirname = "../../../theme";
//     console.log("Transforming files...");
//     readFiles(
//         __dirname,
//         {
//             excludeDir: ["node_modules"],
//             match: /\.tsx?$/,
//         },
//         function (err, content, filename, next) {
//             if (err) throw err;
//             const new_content = to_js(content);

//             writeFile(filename, new_content, (err) => {
//                 if (err) {
//                     console.error(err);
//                 }
//             });

//             next();
//         },
//         function (err, files) {
//             if (err) throw err;
//             console.log("Finished transforming files:", files);
//             console.log("Changing Extensions...");
//             for(const file of files) {
//                 rename(file, file.replace(/(\.ts)$/i, ".js").replace(/(\.tsx)$/i, ".jsx"), function(err) {
//                     if ( err ) console.log('ERROR Renaming: ' + err);
//                 });
//             }
//             console.log("Finished changing Extensions...");
//         }
//     );
// }


  const handleActionButtonClick = async(event) => {
    try{
    setAnchorEl(event.currentTarget)

  //  const srcDirectory = "horizon\src\theme"
  //  const destDirectory = "client\src\components\layouts\main-layout"
  //   await convertTsxToJsx(srcDirectory, destDirectory)
  //   console.log('success')
   }
    catch(error){
      console.log(error)
    } 
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleMenuItemClick = country => {
    setCountry(country)
    handleMenuClose()
  }

  return (
    <Box pr={2}>
      <Stack
        onClick={handleActionButtonClick}
        direction="row"
        spacing={0.5}
        alignItems="center"
        sx={{ cursor: "pointer" }}
      >
        <Icon icon={country.flag} fontSize={50} />
        <Icon
          icon="ri:arrow-down-s-line"
          color="text.disabled"
          fontSize={24}
        />
      </Stack>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        sx={{
          mt: 0.5,
          "& .MuiList-root": {
            width: 190
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {countries.map((item, index) => {
          return (
            <MenuItem
              key={item.id}
              onClick={() => handleMenuItemClick(countries[index])}
              sx={{
                mb: 0.5,
                bgcolor: country.id === item.id ? "info.main" : null
              }}
            >
              <ListItemIcon sx={{ mr: 1.5, fontSize: 'h2.fontSize'}}>
                <Icon icon={item.flag} />
              </ListItemIcon>
              <ListItemText>
                <Typography>{item.name}</Typography>
              </ListItemText>
            </MenuItem>
          )
        })}
      </Menu>
    </Box>
  )
}

export default CountryMenu;
