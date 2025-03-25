/*
 * @fileoverview    {InterlocutoresComercialesContainerComponent}
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
import { InterlocutoresComercialesViewModel } from '../../model/interlocutores-comerciales.model';
import { InterlocutoresComercialesFacade } from '../../facade/interlocutores-comerciales.facade';

/**
 * TODO: Description of {@code InterlocutoresComercialesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-interlocutores-comerciales-container',
    templateUrl: './interlocutores-comerciales-container.component.html',
    standalone: false,
    styleUrls: ['./interlocutores-comerciales-container.component.css']
})
export class InterlocutoresComercialesContainerComponent extends GenericContainerComponent<InterlocutoresComercialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: InterlocutoresComercialesViewModel,
        entityFacade: InterlocutoresComercialesFacade) {
        super(entityInstance, entityFacade);
    }

}
