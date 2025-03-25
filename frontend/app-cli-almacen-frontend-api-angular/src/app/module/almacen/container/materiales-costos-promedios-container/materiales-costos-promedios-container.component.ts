/*
 * @fileoverview    {MaterialesCostosPromediosContainerComponent}
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
import { MaterialesCostosPromediosViewModel } from '../../model/materiales-costos-promedios.model';
import { MaterialesCostosPromediosFacade } from '../../facade/materiales-costos-promedios.facade';

/**
 * TODO: Description of {@code MaterialesCostosPromediosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-materiales-costos-promedios-container',
    templateUrl: './materiales-costos-promedios-container.component.html',
    standalone: false,
    styleUrls: ['./materiales-costos-promedios-container.component.css']
})
export class MaterialesCostosPromediosContainerComponent extends GenericContainerComponent<MaterialesCostosPromediosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MaterialesCostosPromediosViewModel,
        entityFacade: MaterialesCostosPromediosFacade) {
        super(entityInstance, entityFacade);
    }

}
