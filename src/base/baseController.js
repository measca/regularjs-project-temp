import "../lib/font-awesome/css/font-awesome.css";

import {install as fileSize} from "../regular/filter/fileSize";
import {install as alert} from "../regular/directive/alert";
import {install as tooltip} from "../regular/directive/tooltip";
import {install as validation} from "../regular/validate/validation";
Regular.use(fileSize);
Regular.use(alert);
Regular.use(tooltip);
Regular.use(validation);