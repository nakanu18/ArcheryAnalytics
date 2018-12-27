import * as Types from "../Types";

export const roundTemplateForScoreCard = (
    roundName: string,
    roundTemplates: Types.IRoundTemplate[]
): Types.IRoundTemplate | null => {
    return (
        roundTemplates.find((element: Types.IRoundTemplate) => {
            return element.roundName === roundName;
        }) || null
    );
};
