import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      marginBottom: '6rem'
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      backgroundColor: '#000000'
    },
  }));
  
const Nominations = ({ nominations, removeNomination }) => {

    const classes = useStyles();
        return (
          <div>
            { nominations.length > 0 ? <Typography variant="subtitle1" align="center">Your 2021 Nominees</Typography> : null }
            <div className={classes.root} >
              <GridList className={classes.gridList} cols={5}>
                {nominations.map((nom) => (
                  <GridListTile key={nom.imdbID} style={{ height: 'auto', width: 'auto' }} cols={1} >
                    <img src={nom.Poster} alt={nom.Title} />
                    <GridListTileBar
                      title={nom.Title}
                      actionIcon={
                        <IconButton aria-label={`delete`} onClick={() => removeNomination(nom)}  >
                          <DeleteOutlineIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </div>
        )

}

export default Nominations;
