import './App.css';
import SkinCard from './components/SkinCard';
import { Skin } from './utils/Types';
import { Box, Grid } from '@mui/material';

const skins: Array<Skin> = [
  {
  id: 0,
  title: "Titulo de la skin 1",
  img: "https://static.wixstatic.com/media/80c5f0_47c488c875ad464781ac38f66f26e680~mv2.png/v1/fill/w_358,h_269,al_c,lg_1,q_85,enc_auto/80c5f0_47c488c875ad464781ac38f66f26e680~mv2.png",
  price: 1500
  },
  {
  id:1,
  title: "Titulo de la skin 2",
  img: "https://static.wixstatic.com/media/eb7755_a5560b7685a04a01b7b75f9ae6b0509c~mv2.png/v1/fill/w_107,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eb7755_a5560b7685a04a01b7b75f9ae6b0509c~mv2.png",
  price: 1555
  },
  {
  id:2,
  title: "Titulo de la skin 3",
  img: "https://static.wixstatic.com/media/eb7755_3a8f4680e27f4edb9d6cb00c9a7ac618~mv2.png/v1/fill/w_358,h_269,al_c,lg_1,q_85,enc_auto/eb7755_3a8f4680e27f4edb9d6cb00c9a7ac618~mv2.png",
  price: 1250
  }
]

function App() {
  return (
    <Box sx={{p:4}}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {
            skins.map(skin =>
              <Grid item>
                <SkinCard skin={skin} />
              </Grid>
            )
          }
      </Grid>
    </Box>
  );
}

export default App;
