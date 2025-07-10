/*
 * @overview        {CondicionesPagosContainerComponent}
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
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { CondicionesPagosViewModel } from '../../model/condiciones-pagos.model';
import { CondicionesPagosFacade } from '../../facade/condiciones-pagos.facade';

/**
 * TODO: Description of {@code CondicionesPagosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-condiciones-pagos-container',
    templateUrl: './condiciones-pagos-container.component.html',
    standalone: false,
    styleUrls: ['./condiciones-pagos-container.component.css']
})
export class CondicionesPagosContainerComponent extends GenericContainerComponent<CondicionesPagosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CondicionesPagosViewModel,
        entityFacade: CondicionesPagosFacade) {
        super(entityInstance, entityFacade);
    }

}
