import restate from "../lib/routerJS/router.js";
import urlConfig, {index} from "../viewUrlConfig.js";

var stateman = restate();

for(var key in urlConfig) {
  var v = urlConfig[key];
  stateman.state(key, v.component, v.config);
}

stateman.on("notfound", function(){
  this.go(index)
}).start();