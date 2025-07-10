/*
 * @overview        {ConsecutivosContainerComponent}
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
import { ConsecutivosViewModel } from '../../model/consecutivos.model';
import { ConsecutivosFacade } from '../../facade/consecutivos.facade';

/**
 * TODO: Description of {@code ConsecutivosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-consecutivos-container',
    templateUrl: './consecutivos-container.component.html',
    standalone: false,
    styleUrls: ['./consecutivos-container.component.css']
})
export class ConsecutivosContainerComponent extends GenericContainerComponent<ConsecutivosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ConsecutivosViewModel,
        entityFacade: ConsecutivosFacade) {
        super(entityInstance, entityFacade);
    }

}
