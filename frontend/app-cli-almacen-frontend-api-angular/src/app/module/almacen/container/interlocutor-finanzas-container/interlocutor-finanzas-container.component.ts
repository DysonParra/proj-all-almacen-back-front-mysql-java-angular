/*
 * @fileoverview    {InterlocutorFinanzasContainerComponent}
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
import { InterlocutorFinanzasViewModel } from '../../model/interlocutor-finanzas.model';
import { InterlocutorFinanzasFacade } from '../../facade/interlocutor-finanzas.facade';

/**
 * TODO: Description of {@code InterlocutorFinanzasContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-interlocutor-finanzas-container',
    templateUrl: './interlocutor-finanzas-container.component.html',
    standalone: false,
    styleUrls: ['./interlocutor-finanzas-container.component.css']
})
export class InterlocutorFinanzasContainerComponent extends GenericContainerComponent<InterlocutorFinanzasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: InterlocutorFinanzasViewModel,
        entityFacade: InterlocutorFinanzasFacade) {
        super(entityInstance, entityFacade);
    }

}
