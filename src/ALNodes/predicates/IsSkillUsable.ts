import { SkillName } from "alclient";
import { BTNode } from "../../core/BTNode";
import { Blackboard } from "../../core/Blackboard";
import { BTNodeStatus } from "../../core/BTNodeStatus";

export interface IsSkillUsableProps {
    spellName: SkillName;
}

export class IsSkillUsable extends BTNode {
    spellName: SkillName;

    constructor({ spellName }: IsSkillUsableProps) {
        super();
        this.spellName = spellName;
    }

    override getNodeType(): string {
        return "IsSkillUsable";
    }

    override getComment(): string {
        return this.spellName;
    }

    override tick(blackboard: Blackboard): BTNodeStatus {
        if (blackboard.character.canUse(this.spellName)) {
            this.debug(`${this.spellName} is usable`);
            return BTNodeStatus.Success;
        }

        this.debug(`${this.spellName} is not usable`);
        return BTNodeStatus.Failure;
    }
}
