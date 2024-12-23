import Blockly from 'blockly';
import 'blockly/javascript';
import { BlocklyR } from './blockly_compressed';

// Import block definitions directly
import './blocks/general/glimpse';
import './blocks/general/head';
import './blocks/general/help';
import './blocks/general/lib';
import './blocks/general/names';
import './blocks/general/tail';
import './blocks/inference/anova';
import './blocks/inference/proptest';
import './blocks/inference/proptest2';
import './blocks/inference/xchisqtest';
import './blocks/inference/regression';
import './blocks/inference/ttest';
import './blocks/inference/Gproptest';
import './blocks/inference/Gproptest2';
import './blocks/inference/Gslrsummary';
import './blocks/inference/Gxchisqtest';
import './blocks/statistics/correlation';
import './blocks/statistics/tally';
import './blocks/statistics/tallysexdata';
import './blocks/statistics/tallysexdata2';
import './blocks/statistics/tallysexformatdata';
import './blocks/statistics/Gtallydata';
import './blocks/statistics/Gtallydataformat';
import './blocks/statistics/Gtallysexdata';
import './blocks/statistics/Gtallysexdata2';
import './blocks/statistics/Gtallysexformatdata';
import './blocks/statistics/favstats'; 
import './blocks/visualization/gf_boxplot';
import './blocks/visualization/gf_histogram';
import './blocks/visualization/gf_bar';
import './blocks/visualization/gf_point';
import './blocks/visualization/gf_dens';
import './blocks/visualization/gf_counts';
import './blocks/visualization/gf_dens_color';
import './blocks/visualization/gf_percents';
import './blocks/visualization/Ggf_bar';
import './blocks/visualization/Ggf_dens';
import './blocks/visualization/Ggf_dens_color';
import './blocks/visualization/Ggf_histogram';
import './blocks/visualization/Ggf_histogram_substance';
import './blocks/visualization/Ggf_point';
import './blocks/visualization/mosaicplot';
import './blocks/visualization/pie';

// Setup R blocks generator
Blockly.RBlocks = new Blockly.Generator('RBlocks');

export { Blockly, BlocklyR };