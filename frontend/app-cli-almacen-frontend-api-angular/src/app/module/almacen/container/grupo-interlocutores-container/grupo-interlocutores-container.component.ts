/*
 * @overview        {GrupoInterlocutoresContainerComponent}
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
import { GrupoInterlocutoresViewModel } from '../../model/grupo-interlocutores.model';
import { GrupoInterlocutoresFacade } from '../../facade/grupo-interlocutores.facade';

/**
 * TODO: Description of {@code GrupoInterlocutoresContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-grupo-interlocutores-container',
    templateUrl: './grupo-interlocutores-container.component.html',
    standalone: false,
    styleUrls: ['./grupo-interlocutores-container.component.css']
})
export class GrupoInterlocutoresContainerComponent extends GenericContainerComponent<GrupoInterlocutoresViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: GrupoInterlocutoresViewModel,
        entityFacade: GrupoInterlocutoresFacade) {
        super(entityInstance, entityFacade);
    }

}
