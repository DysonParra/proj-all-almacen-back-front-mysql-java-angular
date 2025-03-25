/*
 * @fileoverview    {MaterialesContainerComponent}
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
import { MaterialesViewModel } from '../../model/materiales.model';
import { MaterialesFacade } from '../../facade/materiales.facade';

/**
 * TODO: Description of {@code MaterialesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-materiales-container',
    templateUrl: './materiales-container.component.html',
    standalone: false,
    styleUrls: ['./materiales-container.component.css']
})
export class MaterialesContainerComponent extends GenericContainerComponent<MaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MaterialesViewModel,
        entityFacade: MaterialesFacade) {
        super(entityInstance, entityFacade);
    }

}
