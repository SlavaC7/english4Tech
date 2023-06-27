import { Box, TextField } from "@mui/material";

const TitleUnit: React.FC<{
  unit: string;
  onSetUnit: (even: string) => void;
}> = ({ unit, onSetUnit }) => {
  return (
    <div className="changeBlock">
      <h2>Title</h2>

            <Box
              style={{margin:15}}
            >
              <TextField 
              label={"Title"} 
              variant="standard"
              required
              value={unit}
              onChange={(even) => onSetUnit(even.target.value)}
              fullWidth 
              />
            </Box>
    </div>
  );
};
export default TitleUnit;
