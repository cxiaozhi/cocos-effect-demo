import {_decorator, Component, Node, Sprite, UITransform} from "cc";

const {ccclass, property} = _decorator;

@ccclass
export default class CircleAvatar extends Component {
    @property(Node)
    rectAvatar: Node = null;

    start() {
        let width = this.rectAvatar.getComponent(UITransform).width;
        let hight = this.rectAvatar.getComponent(UITransform).height;
        this.rectAvatar
            .getComponent(Sprite)
            .getMaterialInstance(0)
            .setProperty("wh_ratio", width / hight);
    }
}
