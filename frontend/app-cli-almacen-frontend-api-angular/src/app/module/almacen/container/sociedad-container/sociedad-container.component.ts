/*
 * @fileoverview    {SociedadContainerComponent}
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
import { SociedadViewModel } from '../../model/sociedad.model';
import { SociedadFacade } from '../../facade/sociedad.facade';

/**
 * TODO: Description of {@code SociedadContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-sociedad-container',
    templateUrl: './sociedad-container.component.html',
    standalone: false,
    styleUrls: ['./sociedad-container.component.css']
})
export class SociedadContainerComponent extends GenericContainerComponent<SociedadViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: SociedadViewModel,
        entityFacade: SociedadFacade) {
        super(entityInstance, entityFacade);
    }

}
