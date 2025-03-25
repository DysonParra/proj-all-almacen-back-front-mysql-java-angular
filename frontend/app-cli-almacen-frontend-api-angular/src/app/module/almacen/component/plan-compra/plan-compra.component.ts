/*
 * @fileoverview    {PlanCompraComponent}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Component } from '@angular/core';
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { PlanCompraViewModel } from '../../model/plan-compra.model';

/**
 * TODO: Description of {@code PlanCompraComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-plan-compra',
    templateUrl: './plan-compra.component.html',
    standalone: false,
    styleUrls: ['./plan-compra.component.css']
})
export class PlanCompraComponent extends GenericComponent<PlanCompraViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PlanCompraViewModel) {
        super(entityInstance);
    }

}
