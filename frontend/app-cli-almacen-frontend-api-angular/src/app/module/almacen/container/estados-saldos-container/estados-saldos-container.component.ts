/*
 * @overview        {EstadosSaldosContainerComponent}
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
import { EstadosSaldosViewModel } from '../../model/estados-saldos.model';
import { EstadosSaldosFacade } from '../../facade/estados-saldos.facade';

/**
 * TODO: Description of {@code EstadosSaldosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-estados-saldos-container',
    templateUrl: './estados-saldos-container.component.html',
    standalone: false,
    styleUrls: ['./estados-saldos-container.component.css']
})
export class EstadosSaldosContainerComponent extends GenericContainerComponent<EstadosSaldosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: EstadosSaldosViewModel,
        entityFacade: EstadosSaldosFacade) {
        super(entityInstance, entityFacade);
    }

}
