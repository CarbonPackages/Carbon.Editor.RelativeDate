import manifest from "@neos-project/neos-ui-extensibility";

import RelativeDate from "./RelativeDate";

manifest("Carbon.Editor:RelativeDate", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Carbon.Editor/RelativeDate", {
        component: RelativeDate,
    });
});
